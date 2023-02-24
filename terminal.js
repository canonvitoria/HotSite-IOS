function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventForm(event) {
        event.preventDefault();

       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const email = form.querySelector('.email');
       const telefone = form.querySelector('.telefone');

       pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,

        telefone: telefone.value
       });

       console.log(pessoas);

       resultado.innerHTML = `<p>${nome.value} ${sobrenome.value} seus dados foram cadastrados com sucesso.</p>`
    }

    form.addEventListener('submit', recebeEventForm);
}
meuEscopo();

