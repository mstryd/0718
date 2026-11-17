// Days-together counter, anchored to July 18, 2026.
const START_DATE = new Date(2026, 6, 18);

const MS_PER_DAY = 86400000;

const getDayCount = (now = new Date()) => {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = Math.round((today.getTime() - START_DATE.getTime()) / MS_PER_DAY);
    return Math.max(1, diff + 1);
};

export const initDayCounter = () => {
    const counter = document.getElementById('dayCounter');
    if (!counter) {
        return;
    }

    const render = () => {
        const days = getDayCount();
        counter.textContent = `Day ${days}`;
        counter.setAttribute('title', `Day ${days} since July 18, 2026`);
        counter.setAttribute('aria-label', `Day ${days} since July 18, 2026`);
    };

    render();

    // Keeps the number honest across midnight and tab wake-ups.
    setInterval(render, 60000);
    document.addEventListener('visibilitychange', render);
};
