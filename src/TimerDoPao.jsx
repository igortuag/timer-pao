import { useState } from "react";

/**
 * Calcula a diferença entre a hora atual e o horário alvo fornecido no formato 24h.
 * Retorna uma string no formato HH:MM representando o tempo restante.
 *
 * @param {string} horarioAlvo - Horário no formato 'HH:MM' em 24h (ex: '19:00' para 7:00 PM)
 * @return {string} - Tempo restante no formato HH:MM (ex: '11:00')
 */
function calcularTempoRestante(horarioAlvo) {
  // 1. Obter a data e hora atual
  const agora = new Date();

  try {
    // 2. Extrair horas e minutos do horário alvo
    // exemplo: "07:30" -> ["07", "30"] e então é convertido para números
    // mesmo que horasAlvo = horarioAlvo.split(":").map(Number)[0]
    const [horasAlvo, minutosAlvo] = horarioAlvo.split(":").map(Number);

    // 3. Validar os valores (hora 0-23, minutos 0-59)
    if (
      horasAlvo < 0 ||
      horasAlvo > 23 ||
      minutosAlvo < 0 ||
      minutosAlvo > 59
    ) {
      throw new Error("Horário inválido");
    }

    // 4. Criar objeto Date para o horário alvo (mesmo dia)
    const alvo = new Date(
      agora.getFullYear(),
      agora.getMonth(),
      agora.getDate(),
      horasAlvo,
      minutosAlvo
    );

    // 5. Verificar se o horário já passou hoje
    if (alvo < agora) {
      // Se passou, adicionar 1 dia
      alvo.setDate(alvo.getDate() + 1);
    }

    // 6. Calcular diferença em milissegundos
    const diferencaMs = alvo - agora;

    // 7. Converter milissegundos para horas e minutos
    const horasRestantes = Math.floor(diferencaMs / (1000 * 60 * 60));
    const minutosRestantes = Math.floor(
      (diferencaMs % (1000 * 60 * 60)) / (1000 * 60)
    );

    // 8. Formatar para HH:MM com 2 dígitos
    const horasFormatadas = horasRestantes.toString().padStart(2, "0");
    const minutosFormatados = minutosRestantes.toString().padStart(2, "0");

    return `${horasFormatadas}:${minutosFormatados}`;
  } catch {
    return "Formato inválido. Use HH:MM (24h)";
  }
}
// Exemplos de uso:
// console.log(calcularTempoRestante('19:00')); // Tempo restante até 7:00 PM
// console.log(calcularTempoRestante('06:00')); // Tempo restante até 6:00 AM
// console.log(calcularTempoRestante('23:30')); // Tempo restante até 11:30 PM

export default function TimerDoPao() {
  const [desiredTime, setDesiredTime] = useState("07:30");

  return (
    <div className="min-h-screen bg-[#FFF6E5] flex flex-col items-center justify-center px-4 py-6">
      <div className="bg-[#FDEBC8] w-full max-w-sm rounded-xl p-6 shadow space-y-6">
        <h1 className="text-2xl font-bold text-[#4B2E2B] flex items-center gap-2">
          <span role="img" aria-label="pão">
            🍞
          </span>{" "}
          Timer do Pão
        </h1>

        <div>
          <label className="block mb-1 font-medium text-[#4B2E2B]">
            Hora desejada
          </label>
          <input
            type="time"
            value={desiredTime}
            onChange={(e) => setDesiredTime(e.target.value)}
            className="w-full rounded-md border border-[#C38E5C] p-2 bg-[#FFF6E5] text-[#4B2E2B]"
          />
        </div>

        <div className="bg-white text-center rounded-xl p-4 shadow text-[#4B2E2B] text-xl font-bold">
          Você deve colocar o timer para:
          <span className="text-3xl block mt-2">
            {calcularTempoRestante(desiredTime)}
          </span>
        </div>

        <button
          onClick={() => {
            setDesiredTime("07:30");
          }}
          className="w-full bg-[#C38E5C] text-white py-2 rounded-lg font-semibold hover:bg-[#b57e4e] transition"
        >
          Reiniciar
        </button>

        <p className="text-sm text-center text-[#4B2E2B] opacity-70">
          Este site é uma estimativa. Sempre confira seu pão 😉
        </p>
      </div>
    </div>
  );
}
