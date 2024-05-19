if (window.location.href.includes('en-us')) {
    const confirmed = window.confirm("Mudar para português?");
    if (confirmed)
        window.location.href = window.location.href.replace('en-us', 'pt-br');
}