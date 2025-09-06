
document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('input[name="display"]');
    document.addEventListener('keydown', function(e) {
        if (
            (e.key >= '0' && e.key <= '9') ||
            ['+', '-', '*', '/', '.'].includes(e.key)
        ) {
            display.value += e.key;
        } else if (e.key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (e.key === 'Enter' || e.key === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if(e.key === 'c'){
            display.value = ' ';
        }
    });
});
