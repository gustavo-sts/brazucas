// Menu Mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Preencher serviço quando clicar em agendar
document.querySelectorAll('.service-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const service = this.closest('.service-card').dataset.service;
        document.querySelector('#servico').value = service;
    });
});

// Form Submit com integração WhatsApp
document.querySelector('.booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pegar dados do formulário
    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const servico = document.getElementById('servico');
    const servicoTexto = servico.options[servico.selectedIndex].text;
    const data = document.getElementById('data').value;
    const observacoes = document.getElementById('observacoes').value;
    
    // Formatar data e hora
    const dataObj = new Date(data);
    const dataFormatada = dataObj.toLocaleDateString('pt-BR');
    const horaFormatada = dataObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    // Criar mensagem
    let mensagem = `Olá! Gostaria de agendar um horário:\n\n`;
    mensagem += `👤 Nome: ${nome}\n`;
    mensagem += `✂️ Serviço: ${servicoTexto}\n`;
    mensagem += `📅 Data: ${dataFormatada}\n`;
    mensagem += `⏰ Hora: ${horaFormatada}\n`;
    if (observacoes) {
        mensagem += `📝 Observações: ${observacoes}\n`;
    }
    
    // Número do WhatsApp da barbearia (substitua pelo número real)
    const numeroWhatsapp = '5585999999999';
    
    // Criar URL do WhatsApp
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    
    // Abrir WhatsApp em nova aba
    window.open(urlWhatsapp, '_blank');
    
    // Limpar formulário
    this.reset();
});
