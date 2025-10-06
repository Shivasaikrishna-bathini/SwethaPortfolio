import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

    if (!cursorDot || !cursorOutline) return;

    const moveCursor = (e: MouseEvent) => {
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
      
      cursorOutline.style.left = (e.clientX - 16) + 'px';
      cursorOutline.style.top = (e.clientY - 16) + 'px';
    };

    // Enlarge cursor on hover
    const enlargeCursor = () => {
      cursorOutline.style.transform = 'scale(1.5)';
    };

    const shrinkCursor = () => {
      cursorOutline.style.transform = 'scale(1)';
    };

    window.addEventListener('mousemove', moveCursor);
    
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-badge, [data-testid]');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', enlargeCursor);
      el.addEventListener('mouseleave', shrinkCursor);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', enlargeCursor);
        el.removeEventListener('mouseleave', shrinkCursor);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-outline" />
    </>
  );
}
