import { BASE_URL } from './configApi'

async function Send(date_form) {
    const response = await fetch(BASE_URL + 'api/v1/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date_form)
    })
    console.log(response);
    if (response.status == '400') {
        console.log('Произошла Ошибка');
        return null
    }
    let result = await response.json();
    return result.token
}

export { Send }