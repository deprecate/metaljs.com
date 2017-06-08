'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';
import Toggler from 'metal-toggler';

import templates from './Sidebar.soy';

class Sidebar extends Component {
	attached() {
		this._toggler = new Toggler({
			content: '.sidebar-toggler-content',
			header: '.sidebar-header'
		});
	}

	disposed() {
		this._toggler.dispose();
	}
	
	rendered() {
		window.addEventListener('scroll', this.bindLogoComponent);
	}
	
	bindLogoComponent(){
		if(window.pageYOffset >= 60){
			document.querySelector('.logo-container').classList.add('flip-y');
		}else {
			document.querySelector('.logo-container').classList.remove('flip-y');
		}
	}
};

Soy.register(Sidebar, templates);

export default Sidebar;
