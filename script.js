document.addEventListener('DOMContentLoaded', () => {
    const usernameElement = document.getElementById('username');
    
    // Mock username for demonstration
    usernameElement.textContent = 'Usuário';

    // Handle profile form submission (Mock function)
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Perfil atualizado com sucesso!');
        });
    }
});
