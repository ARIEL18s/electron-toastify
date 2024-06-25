// Importar Toastify
const Toastify = require('toastify-js');

// Esperar até que o DOM esteja carregado
document.addEventListener('DOMContentLoaded', function () {
    // Selecionar o botão
    const toastBtn = document.getElementById('toastBtn');

    // Adicionar evento de clique ao botão
    toastBtn.addEventListener('click', function () {
        // Exibir toast usando Toastify
        Toastify({
            text: "Minha notificação de teste 🏆🏆!",
                duration: 3000,
                    close: true,
                        gravity: "top",
                             position: "right",
                                 stopOnFocus: true,
                                     style: {
                                              background: "linear-gradient(to right, #00b09b, #96c93d)",
                                                },
                                              }).showToast();
    });
});
