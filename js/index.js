// // ノーマルバージョン

// テキスト変更
function changeAisatsuText() {
    var aisatsu_text = document.getElementById("aisatsu_text");  // 要素を取得
    aisatsu_text.textContent = "こんばんは";  // テキストを「こんばんは」に変更する
}

// 色変更
function changeAisatsuColor() {
    var aisatsu_text = document.getElementById("aisatsu_text");  // 要素の取得
    aisatsu_text.style.color = "#ff0000";  // テキストの色を「#ff0000」（赤色）に変更
}

// 読み込み時に実行
window.onload = function () {
    var change_text_btn = this.document.getElementById("change_text_btn");  // 「テキスト変更」ボタンの取得
    var change_color_btn = this.document.getElementById("change_color_btn");  // 「色変更」ボタンの取得

    change_text_btn.onclick = this.changeAisatsuText;  // テキスト変更ボタンに機能をつける
    change_color_btn.onclick = this.changeAisatsuColor;  // 色変更ボタンに機能をつける
}


// // jQueryバージョン
// // テキスト変更
// function changeAisatsuText() {
//     var aisatsu_text = $("#aisatsu_text");  // 要素取得
//     aisatsu_text.text("こんばんは");  // テキスト変更
// }

// // 色変更
// function changeAisatsuColor() {
//     var aisatsu_text = $("#aisatsu_text");  // 要素取得
//     aisatsu_text.css("color", "#ff0000");  // 色変更
// }

// // 読み込み時に実行
// $(function () {
//     $("#change_text_btn").on("click", changeAisatsuText);  // テキスト変更ボタンに機能をつける
//     $("#change_color_btn").on("click", changeAisatsuColor);  // 色変更ボタンに機能をつける
// })