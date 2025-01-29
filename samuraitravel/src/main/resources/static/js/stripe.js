const stripe = Stripe('pk_test_51QlQynCLRsjiG7z3AlWLdXAK1j27WwKn22jpK0lFYfTsPVEmCiR15AybQQTFLDwQmsM5sE0DnSasbnRS0PQOnWuI00LU0YPz0H');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});