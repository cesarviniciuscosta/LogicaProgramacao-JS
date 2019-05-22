// Abordagem Orientada a Objetos
let colaborador =  {
    // Propriedades
    salarioBase: 0.0, 
    horasExtras: 0.0,
    taxa: 0.0,
    // Métodos
    calculaSalarioFinal: function() {
        return this.salarioBase + (this.horasExtras * this.taxa)
    }
}
