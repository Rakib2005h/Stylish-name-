
function generateStyles() {
    const name = document.getElementById('nameInput').value;
    const output = document.getElementById('outputArea');
    const fonts = [
        'cursive', 'monospace', 'serif', 'fantasy',
        'Arial Black', 'Comic Sans MS', 'Courier New',
        'Georgia', 'Impact', 'Lucida Console', 'Times New Roman',
        'Trebuchet MS', 'Verdana'
    ];
    output.innerHTML = '';
    if (name.trim() === '') {
        output.innerHTML = '<p>Please enter a name.</p>';
        return;
    }
    fonts.forEach(font => {
        const div = document.createElement('div');
        div.style.fontFamily = font;
        div.innerText = name;
        output.appendChild(div);
    });
}
