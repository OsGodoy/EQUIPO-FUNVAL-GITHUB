// MOSTRAR : TODOS LO ESTUDIANTES, SOLO LOS ESTUDIANTES CON PROMEDIO MAYOR A 51, ESTUDIANTES
// CON PROMEDIO MENOR A 51,
// ESTUDIANTES SOLO DE MEXICO, EL PAIS CON MAS ESTUDIANTES Y EL NUMERO DE ESTUDIANTES Q TIENE

function promedio(arrayPro) {
  let prom = 0;
  for (let i = 0; i < arrayPro.length; i++) {
    prom += arrayPro[i]
  }
  return prom / arrayPro.length
}

estudiantes.forEach(alumno => {
    const prom = promedio(alumno.notas)
    if(prom>51){
        console.log(alumno.nombre,prom,"APROBÓ")
    }
})

estudiantes.forEach(alumno => {
    const prom = promedio(alumno.notas)
    if(prom<51){
        console.log(alumno.nombre,prom,"REPROBÓ")
    }
})


