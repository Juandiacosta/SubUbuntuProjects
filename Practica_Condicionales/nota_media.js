var nota_matematicas = parseFloat(prompt("Por favor ingrese la nota que en este periodo obtuvo para la asignatura de matematicas"));
var nota_ciencias = parseFloat(prompt("Por favor ingrese la nota que obtuvo este periodo en la asignatura de ciencias"));
var nota_sociales = parseFloat(prompt("Por favor ingrese la nota que obtuvo este periodo en la asignatura de ciencias"));

var promedio_notas = (nota_matematicas + nota_ciencias + nota_sociales) / 3;

if(promedio_notas >= 5)
{
    document.write("Su promedio fue de " + promedio_notas + " lo cual determina que usted aprobó este periodo academico");
}
else
{
    document.write("Su promedio fue de " + promedio_notas + " lo cual determina que usted no aprobó el periodo academico, debe hacer nivelación");
}