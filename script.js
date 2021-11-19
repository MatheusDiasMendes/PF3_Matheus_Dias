$('body').hide(300);
$('body').show(500);

const verificar = document.getElementById('verificar');

function poupanca(){
      let nome = document.getElementById("nome").value;
      let valor = document.getElementById("valor").value;
      let juros = document.getElementById("juros").value;
      let parcelas = document.getElementById("parcelas").value;

      let taxa = juros/100

      const vf = valor*(((1+taxa)**parcelas -1)/taxa).toFixed(4);  

    if (nome !="" && valor !="" && juros !="" && parcelas !=""){
     
        var texto = nome+', se você aplicar R$'+valor+', à taxa de juros de '+juros+'% ao mês, durante '+parcelas+
        ' meses, acumulará uma poupança de R$'+vf;
      
    }else{
       
        var texto = "Por gentileza preencha todos os campos para ser feito o calculo!"
     
    } 

      document.getElementById("texto").innerHTML = texto;
      console.log(texto)     
   }
