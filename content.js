(function() {
    const floatingText = document.createElement('div');
    floatingText.id = 'yaya-floating-text';
    floatingText.textContent = '雅雅最可爱';
    document.body.appendChild(floatingText);

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    floatingText.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - floatingText.offsetLeft;
        offsetY = e.clientY - floatingText.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            floatingText.style.left = `${e.clientX - offsetX}px`;
            floatingText.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
})();

// 添加此函数以切换悬浮文字的显示
function toggleFloatingText() {
    const floatingText = document.getElementById('yaya-floating-text');
    if (floatingText) {
        floatingText.style.display = floatingText.style.display === 'none' ? 'block' : 'none';
    }
}

// 添加此函数以调整悬浮文字的透明度
function adjustOpacity(opacity) {
    const floatingText = document.getElementById('yaya-floating-text');
    if (floatingText) {
        floatingText.style.opacity = opacity / 100; // 将透明度设置为滑动条的值（0-100 转换为 0-1）
    }
}

// 监听来自 popup 的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggleFloatingText') {
        toggleFloatingText();
    } else if (request.action === 'adjustOpacity') { // 添加新的处理分支
        adjustOpacity(request.opacity);
    }
});
