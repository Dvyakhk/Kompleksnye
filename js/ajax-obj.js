function showContent(link) {

		var cont = document.getElementById('contentBody');
		var loading = document.getElementById('loading');

		cont.innerHTML = loading.innerHTML;

		var http = createRequestObject();					// створюємо ajax-об'єкт
		if( http ) {
			http.open('get', link);							// ініціюємо завантаження сторінки
			http.onreadystatechange = function () {			// призначаємо асинхронний обробник події
				if(http.readyState == 4) {
					cont.innerHTML = http.responseText;		// присвоюємо вміст
				}
			}
			http.send(null);
		} else {
			document.location = link;	// якщо ajax-об'єкт не вдається створити, просто перенаправляємо на адресу
		}
	}

function showMenu(link) {

		var cont = document.getElementById('showMenu');
		var loading = document.getElementById('loadingMenu');

		cont.innerHTML = loading.innerHTML;

		var http = createRequestObject();					// створюємо ajax-об'єкт
		if( http ) {
			http.open('get', link);							// ініціюємо завантаження сторінки
			http.onreadystatechange = function () {			// призначаємо асинхронний обробник події
				if(http.readyState == 4) {
					cont.innerHTML = http.responseText;		// присвоюємо вміст
				}
			}
			http.send(null);
		} else {
			document.location = link;	// якщо ajax-об'єкт не вдається створити, просто перенаправляємо на адресу
		}
	}

	// створення ajax об'єкта
	function createRequestObject() {
		try { return new XMLHttpRequest() }
		catch(e) {
			try { return new ActiveXObject('Msxml2.XMLHTTP') }
			catch(e) {
				try { return new ActiveXObject('Microsoft.XMLHTTP') }
				catch(e) { return null; }
			}
		}
	}

