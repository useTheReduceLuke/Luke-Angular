import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {trigger, animate, style, group, query, transition, keyframes, state} from '@angular/animations';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import * as $ from "jquery";


@Component({
	selector: 'app-portfolio-voice',
	templateUrl: './portfolio-voice.component.html',
	styleUrls: ['./portfolio-voice.component.scss']
})


export class PortfolioVoiceComponent implements OnInit, OnDestroy {
	config: any;
	fullpage_api: any;
	public isPlaying: boolean = false;

	constructor() {
	}

	ngOnInit() {
		this.initPlayers(1);
	}	// End-of OnInit

	ngOnDestroy() {

	}	// End-of ngOnDestroy


	calculateTotalValue(length) {
		var minutes = Math.floor(length / 60),
			seconds_int = length - minutes * 60,
			seconds_str = seconds_int.toString(),
			seconds = seconds_str.substr(0, 2),
			time = minutes + ':' + seconds

		return time;
	}

	calculateCurrentValue(currentTime: number) {
		var current_hour = currentTime / 3600 % 24,
			current_minute = currentTime / 60 % 60,
			current_seconds_long = currentTime % 60,
			current_seconds = current_seconds_long.toFixed(),
			current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds_long < 10 ? "0" + current_seconds : current_seconds);

		return current_time;
	}

	initProgressBar() {
		var player = <HTMLAudioElement> document.getElementById('player');
		var length = player["duration"]
		var current_time = player["currentTime"];

		// calculate total length of value
		var totalLength = this.calculateTotalValue(length)
		$(".end-time").html(totalLength);

		// calculate current value time
		var currentTime = this.calculateCurrentValue(current_time);
		$(".start-time").html(currentTime);

		var progressbar = <HTMLProgressElement>document.getElementById('seekObj');
		progressbar.value = (player["currentTime"] / player["duration"]);
		progressbar.addEventListener("click", seek);

		if (player["currentTime"] == player["duration"]) {
			$('#play-btn').removeClass('pause');
		}

		function seek(evt) {
			var percent = evt.offsetX / this.offsetWidth;
			player["currentTime"] = percent * player["duration"];
			progressbar.value = percent / 100;
		}
	};

	initPlayers(num) {

		for (var i = 0; i < num; i++) {

			var playerContainer = document.getElementById('player-container'),
				player = <HTMLAudioElement> document.getElementById('player'),
				playBtn = document.getElementById('play-btn');
			this.isPlaying = false;

			if (playBtn != null) {
				playBtn.addEventListener('click', () => {
					this.togglePlay(player)
				});
			}
		}
	}

	togglePlay(player) {
		if (player["paused"] === false) {
			player.pause();
			this.isPlaying = false;
			

		} else {
			player.play();
			$('#play-btn').addClass('pause');
			this.isPlaying = true;
		}
	}
}