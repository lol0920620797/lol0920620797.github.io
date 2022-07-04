import "./style.css";

import { gsap } from "gsap";
import { navbar } from "./navbar.js";
import { car } from "./car";

window.onload = () => {
	navbar.adjust();
	loadAnimation();
};

window.onresize = () => {
	navbar.adjust();
};

function loadAnimation() {
	// 通過gsap的時間線功能 創造動畫(時間線動畫調試參考可以google：gsap.com)
	// tween又稱為過度動畫
	const tween = gsap.timeline({ delay: 0.8 });

	tween.to(".Loading", { duration: 0.5, opacity: 0, display: "none" });

	// header 開始 duration持續時間；opacity透明度
	tween.from("header", { duration: 0.5, ease: "power2", y: -16 * 6 });
	//將部分transittion設定爲none
	tween.to("header", { duration: 0, transition: 0.3 });
	//header 結束

	//aside 開始 這便是header進入時從上往下 和 aside從下網上的動畫 蠻好玩的 可以多研究研究
	tween.from(".info", { duration: 0.5, ease: "power2", opacity: 0, y: 40 });
	//aside 結束

	// svg 開始
	tween.from(".background-svg", { duration: 1.5, ease: "power2", opacity: 0, x: 80 });

	tween.call(carAnimation);
}

function carAnimation() {
	car.play();
}

const navIcon = document.querySelector("header i");

navIcon.addEventListener("click", () => {
	gsap.fromTo(".menu", { y: -window.innerHeight, opacity: 0, display: "none" }, { duration: 1.2, ease: "power2", opacity: 1, x: 0, y: 0, display: "flex" });
});

const menuIcon = document.querySelector(".menu i");

menuIcon.addEventListener("click", () => {
	const tween = gsap.timeline();
	tween.to(".menu", { duration: 0.3, y: 30 });
	tween.to(".menu", { duration: 1, y: -window.innerHeight, opacity: 0, display: "none" });
});
