export function typeText(typedTextElement: HTMLElement, cursorElement: HTMLElement, index: number, texts: string[]) {
    let currentText = '';
    let isDeleting = false;
    let charIndex = 0;
    let text = texts[0]
  
    function type() {
        if (isDeleting) {
            currentText = text.substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = text.substring(0, charIndex + 1);
            charIndex++;
        }
  
        typedTextElement.innerHTML = currentText;
  
        if (isDeleting && currentText === '') {
            isDeleting = false;
            index++;
            if (index >= texts.length) {
                index = 0;
            }
            text = texts[index];
        } else if (!isDeleting && currentText === text) {
            isDeleting = true;
        }
  
        const typingSpeed = isDeleting ? 50 : 150;
        const delay = isDeleting ? 1000 : 500;
  
        if (isDeleting && charIndex === 0) {
            setTimeout(() => {
                type();
            }, delay);
        } else if (!isDeleting && charIndex === text.length) {
            setTimeout(() => {
                type();
            }, delay);
        } else {
            setTimeout(() => {
                type();
            }, typingSpeed);
        }
    }
  
    type();
}