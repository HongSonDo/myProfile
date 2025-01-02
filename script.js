// Mảng chứa các đường link tới bài báo
const articleLinks = [
    "https://example.com/article1",
    "https://example.com/article2",
    "https://example.com/article3"
];

// Biến đếm số lần click
let count = 0;

// Hàm chuyển tới bài báo tiếp theo
function nextPage() {
    if (count < articleLinks.length) {
        // Chuyển hướng tới bài báo tương ứng
        window.location.href = articleLinks[count];
        count++; // Tăng biến đếm lên 1
    } else {
        alert("Bạn đã xem hết các bài báo.");
    }
}
