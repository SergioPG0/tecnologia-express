document.addEventListener('DOMContentLoaded', function() {
    function calcularPresupuesto() {
      let productoPrice = 0;
      const producto = document.querySelector('input[name="producto"]:checked');
      if (producto) {
        productoPrice = parseFloat(producto.dataset.price);
      }
      let plazo = parseInt(document.getElementById('plazo').value) || 0;
      // Descuento: 5% por cada mes adicional al primero
      let descuento = (plazo > 1) ? (productoPrice * 0.05 * (plazo - 1)) : 0;
      let extras = 0;
      document.querySelectorAll('input[name="extras"]:checked').forEach(extra => {
        extras += parseFloat(extra.dataset.extra);
      });
      let total = productoPrice + extras - descuento;
      if(total < 0) total = 0;
      document.getElementById('total').value = total.toFixed(2) + '€';
    }
  
    // Actualizar el presupuesto en tiempo real
    document.querySelectorAll('input[name="producto"]').forEach(input => {
      input.addEventListener('change', calcularPresupuesto);
    });
    document.getElementById('plazo').addEventListener('input', calcularPresupuesto);
    document.querySelectorAll('input[name="extras"]').forEach(input => {
      input.addEventListener('change', calcularPresupuesto);
    });
  
    // Validación del formulario
    document.getElementById('budgetForm').addEventListener('submit', function(event) {
      if (!this.checkValidity()) {
        event.preventDefault();
        alert('Por favor, completa el formulario correctamente.');
      }
    });
  });
  