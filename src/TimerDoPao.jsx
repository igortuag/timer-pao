import { useState } from 'react';

export default function TimerDoPao() {
  const [desiredTime, setDesiredTime] = useState('07:30');
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(30);

  function calculateStartTime() {
    const [hh, mm] = desiredTime.split(':').map(Number);
    const end = new Date();
    end.setHours(hh);
    end.setMinutes(mm);
    end.setSeconds(0);

    const start = new Date(end.getTime() - (hours * 60 + minutes) * 60000);
    return `${start.getHours().toString().padStart(2, '0')}:${start.getMinutes().toString().padStart(2, '0')}`;
  }

  return (
    <div className="min-h-screen bg-[#FFF6E5] flex flex-col items-center justify-center px-4 py-6">
      <div className="bg-[#FDEBC8] w-full max-w-sm rounded-xl p-6 shadow space-y-6">
        <h1 className="text-2xl font-bold text-[#4B2E2B] flex items-center gap-2">
          <span role="img" aria-label="pão">🍞</span> Timer do Pão
        </h1>

        <div>
          <label className="block mb-1 font-medium text-[#4B2E2B]">Hora desejada</label>
          <input
            type="time"
            value={desiredTime}
            onChange={(e) => setDesiredTime(e.target.value)}
            className="w-full rounded-md border border-[#C38E5C] p-2 bg-[#FFF6E5] text-[#4B2E2B]"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-[#4B2E2B]">Duração do processo</label>
          <div className="flex items-center gap-2 mb-2">
            <button onClick={() => setHours(Math.max(0, hours - 1))} className="bg-[#C38E5C] text-white px-3 py-1 rounded">-</button>
            <span className="text-[#4B2E2B] font-semibold">{hours} h</span>
            <button onClick={() => setHours(hours + 1)} className="bg-[#C38E5C] text-white px-3 py-1 rounded">+</button>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setMinutes(Math.max(0, minutes - 5))} className="bg-[#C38E5C] text-white px-3 py-1 rounded">-</button>
            <span className="text-[#4B2E2B] font-semibold">{minutes} m</span>
            <button onClick={() => setMinutes(minutes + 5)} className="bg-[#C38E5C] text-white px-3 py-1 rounded">+</button>
          </div>
        </div>

        <div className="bg-white text-center rounded-xl p-4 shadow text-[#4B2E2B] text-xl font-bold">
          Você deve colocar o timer para:
          <span className="text-3xl block mt-2">{calculateStartTime()}</span>
        </div>

        <button onClick={() => {
          setDesiredTime('07:30');
          setHours(2);
          setMinutes(30);
        }} className="w-full bg-[#C38E5C] text-white py-2 rounded-lg font-semibold hover:bg-[#b57e4e] transition">
          Reiniciar
        </button>

        <p className="text-sm text-center text-[#4B2E2B] opacity-70">Este site é uma estimativa. Sempre confira seu pão 😉</p>
      </div>
    </div>
  );
}
