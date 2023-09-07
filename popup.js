document.getElementById('activateBtn').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // 发送消息到内容脚本
    chrome.tabs.sendMessage(tab.id, { action: 'toggleFloatingText' });

    // 更新按钮文本
    const btn = document.getElementById('activateBtn');
    if (btn.textContent === '隐藏') {
        btn.textContent = '显示';
    } else {
        btn.textContent = '隐藏';
    }
});



// 添加事件监听器以调整透明度
document.getElementById('opacitySlider').addEventListener('input', async (e) => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // 发送消息到内容脚本以调整透明度
    chrome.tabs.sendMessage(tab.id, { action: 'adjustOpacity', opacity: e.target.value });
});
