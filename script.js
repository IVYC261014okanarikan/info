"use strict";

// スマートフォン用メニュー
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// メニューをクリックしたら閉じる
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "メニューを開く");
    menuToggle.textContent = "☰";
  });
});

// キャラクター選択
const characterCards = document.querySelectorAll(".character-card");
const characterResult = document.getElementById("characterResult");

characterCards.forEach((card) => {
  card.addEventListener("click", () => {
    const character = card.dataset.character;
    characterResult.textContent = `♡ ${character}を選んだよ！ お気に入りに決定？ ♡`;

    characterCards.forEach((item) => {
      item.style.background = "#ffffff";
      item.style.borderColor = "#ffffff";
      item.setAttribute("aria-pressed", "false");
    });

    card.style.background = "#fff0f5";
    card.style.borderColor = "#f28eae";
    card.setAttribute("aria-pressed", "true");
  });
});

// ページの先頭へ戻る
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// スクロール時の表示演出
const sections = document.querySelectorAll(".section, .cta");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach((section) => {
    section.classList.add("fade-in");
    observer.observe(section);
  });
}
