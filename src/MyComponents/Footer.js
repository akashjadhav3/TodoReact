import React from 'react'

function Footer() {
    let footerStyles = {
        position:'relative',
        top:'100vh',
        width:'100%',
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyles}>
            <p className="text-center">
                Copyright &copy; My TodosList.com
            </p>
        </footer>
    )
}

export default Footer
