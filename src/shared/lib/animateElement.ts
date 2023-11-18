export function animateElement(element: HTMLElement, speed: number, range: number) {
    let angle = Math.random() * 2 * Math.PI;
    const startDirection = Math.random() > 0.5 ? 1 : -1
    let direction = startDirection;
  
    function animate() {
        angle += speed * direction;
        const currentX = Math.cos(angle) * range;
        const currentY = Math.sin(angle) * range;
  
        element.style.transform = `translate(${currentX}px, ${currentY}px)`;
        element.style.opacity = '1'
  
        if (Math.abs(currentX) >= range || Math.abs(currentY) >= range) {
            direction *= -1;
            angle += Math.PI; 
        }
  
        requestAnimationFrame(animate);
    }
  
    return requestAnimationFrame(animate);
}