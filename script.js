document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const areasHTML = document.querySelectorAll('input[name="area-interest"]:checked');
    const listAreas = Array.from(areasHTML, area => area.value);

    if(listAreas.length === 0) {
        alert('Você precisa selecionar pelo menos 1 área de interesse');
        return;
    }

    console.log(`Nome: ${document.getElementById('nome').value}`);
    console.log(`Endereço: ${document.getElementById('endereco').value}`);
    console.log(`Cidade: ${document.getElementById('cidade').value}`);
    console.log(`Estado: ${document.getElementById('estado').value}`);
    console.log(`Curriculo: ${document.getElementById('curriculum').value}`);
    console.log(`Áreas de Interesse: ${listAreas.join(', ')}`);
    console.log(`Cargo: ${document.querySelector('input[name="cargo"]:checked').value}`);
});
