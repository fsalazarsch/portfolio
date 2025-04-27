export const timepassed = (fecha) => {
    const fechaInput = new Date(fecha);
    const fechaActual = new Date();
  
    const diferenciaAnios = fechaActual.getFullYear() - fechaInput.getFullYear();
    const diferenciaMeses = 
      diferenciaAnios * 12 + fechaActual.getMonth() - fechaInput.getMonth();
    const diferenciaDias = Math.floor(
      (fechaActual - fechaInput) / (1000 * 60 * 60 * 24)
    );
  
    if (diferenciaDias < 30) {
      return `${diferenciaDias} days ago`;
    } else if (diferenciaMeses < 12) {
      return `${diferenciaMeses} months ago`;
    } else {
      return `${Math.floor(diferenciaMeses / 12)} years ago`;
    }
  };
  