const deleteProduct = (btn) => {
    const prodId =  btn.parentNode.querySelector('[name=productId]').value;
    const csrf =  btn.parentNode.querySelector('[name=_csrf]').value;

    const productElement = btn.closest('article');

    //FIJARME SI EN OTROS PAQUETES SI EL CSRF SE FIJA EN PARAMETROS XQ SINO NO VA A FUNCIONAR
    fetch('/admin/product/' + prodId, {
        method:'DELETE',
        headers:{'csrf-token':csrf}
    })
    .then(result=>{
        return result.json();
    })
    .then( data =>{
        console.log(data);
        productElement.parentNode.removeChild(productElement);
    })
    .catch(err=>{console.log(err)});
};