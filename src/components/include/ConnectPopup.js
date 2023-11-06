import React from 'react';
import close from 'img/ico_close.png'
import icoMetamask from 'img/ico_metamask.png'
import icoWalletConnect from 'img/ico_walletconnect.png'
import icoCoinbase from 'img/ico_coinbase.png'
import arrow from 'img/ico_arr.png'

function ConnectPopup({setisShowPopup}) {

    return (
        <div className="ConnectPopup">
            <div className="contents">
                <button class="btn__close" onClick={() => setisShowPopup(false)}>
                    <img src={close} alt="close" />
                </button>
                <h2>Connect a wallet</h2>

                <a href="javascript:;" className='btn__wallet'>
                    <img src={icoMetamask} alt="img" className='icon' />
                    <span className='name'>METAMASK</span>
                    <img src={arrow} alt="arrow" className='arrow' />
                </a>
                <a href="javascript:;" className='btn__wallet'>
                    <img src={icoWalletConnect} alt="img" className='icon' />
                    <spa className='name'>WALLETCONNECT</spa>
                    <img src={arrow} alt="arrow" className='arrow' />
                </a>
                <a href="javascript:;" className='btn__wallet'>
                    <img src={icoCoinbase} alt="img" className='icon' />
                    <span className='name'>COINBASE WALLET</span>
                    <img src={arrow} alt="arrow" className='arrow' />
                </a>
            </div>
            <div className="bg"></div>
        </div>
    );
}

export default ConnectPopup;
