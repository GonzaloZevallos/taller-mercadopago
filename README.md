   
# Mercadoliebre

###### Proyecto donde podrás integrar Mercado Pago paso a paso para ser todo un experto.
---

*Mercadoliebre* es un ecommerce con hambre de salir al mercado para romper todo. El equipo de desarrolladores estuvo trabajando cinco meses para perfeccionar el producto que hoy está a punto de conocer la luz. El único inconveniente que tuvieron es que ninguno supo integrar la cantidad de métodos de pagos que el cliente solicitó, y la solución que se le ocurrió al líder técnico es implementar el **Checkout de Mercado Pago** para cubrir todas las necesidades requeridas. 

¿Te animás a ayudarlos y formar parte de esto?


---
<br>

### *Requerimientos:*

<br>

###### Medios de pago

El cliente necesita que los pagos con tarjeta de crédito se puedan pagar como máximo en **12 cuotas**. Además no quiere permitir pagos con tarjeta Visa ni tampoco con medios de pago de tipo cajero automático **(atm)**.

<br>

###### Información del pagador

1. **Nombre y apellido**: Ryan Dahl
2. **Email**: test_user_63274575@testuser.com
3. **Código de área**: 11
4. **Teléfono**: 55556666
5. **Nombre de la calle**: Monroe
6. **Número de la casa**: 860
7. **Código postal**: 1234

<br>

###### Producto

A partir del producto seleccionado, se deberá enviar el mismo como ítem de la preferencia de pago.

1. **ID**: 1234
2. **Nombre del producto**: *El nombre del producto que seleccionaron*
3. **Dirección de la imagen**: *La URL real de la imagen del producto que seleccionaron*
4. **Descripción**: *Calzado con muucha facha*
5. **Cantidad**: *1*
6. **Número de orden del pedido (external_reference)**: *Email real de ustedes*

<br>

###### Página de retorno

Una vez el pagador finalice el flujo de pago se deberá retornar al sitio web del cliente y manejar una pantalla diferente para cada estado del pago:

1. **Success**: Si el pago fue aprobado se deberá retornar de forma automática **(auto_return)** hacia una pantalla que muestre un mensaje con el estado del pago y los siguientes datos que se enviarán desde Mercado Pago a través de la Query String:
    - payment_method_id
    - external_reference
    - collection_id

2. **Failure**: Si el pago fue rechazado se deberá retornar de forma manual hacia una pantalla que muestre el mensaje del estado.

3. **Pending**: Si el pago está pendiente de aprobación se deberá retornar de forma manual hacia una pantalla que muestre el mensaje del estado.

<br>

###### Checkout

El cliente solicitó que el Checkout de Mercado Pago se abra en la misma página donde se inicia el flujo de pago **(redirect)**. Además el botón que inicia la pasarela de pago deberá decir *"Pagar la compra"*.

Al generar la preferencia de pago se debe:
    - Enviar la informaciónd el ítem que se está comprando.
    - Enviar los datos del pagador.
    - Enviar la URL donde se van a recibir las notificaciones de pago.
    - Enviar el número de orden *(external_refernece)*.
    - Limitar la cantidad de cuotas según lo solicitado.
    - No permitir los medios de pago que especificó el cliente.

<br>

###### Integrator ID

Se debe incluir el *x-integrator-id* que es un código único para identificar a los desarrolladores o agencias que realizaron la integración (para este ejercicio debes utilizar el **integrator_id** de ejemplo que se menciona en este documento).

<br>

###### Notificaciones Webhook

Deberás generar un endpoint que sea capaz de recibir nuestras notificaciones Webhook según la [documentación] y en el campo notificaction_url de la preferencia deberá apuntar a éste.

<br>

###### Seguridad

Es necesario que incluyas en cada una de tus vistas un [script de seguridad] que sirve para detectar comportamientos inusuales de los compradores en el sitio. Es importante que se envie correctamente el parámetro *view* asignando el valor correspondiente a la página del sitio que se está visitando *("home", "search", "item" o vacío)*.

---

<br>

### Información adicional

<br>

###### integrator-id
dev_24c65fb163bf11ea96500242ac130004

###### Test user (vendedor)

- Public-Key: APP_USR-7eb0138a-189f-4bec-87d1-c0504ead5626
- Access-Token: APP_USR-6317427424180639-042414-47e969706991d3a442922b0702a0da44-469485398

###### Test user (comprador)

- Email: test_user_63274575@testuser.com

*Es importante que uses este email para que puedas utilizar las tarjetas de prueba.*

---

<br>

### Documentación adicional

<br>

###### Mercado Pago Developers
https://www.mercadopago.com.ar/developers/es

<br>

###### Checkout
https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/introduction

<br>

###### Preferencia
https://www.mercadopago.com.ar/developers/es/reference/preferences/resource

<br>

###### Métodos de pago
https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-api/other-payment-ways#bookmark_obt%C3%A9n_los_medios_de_pago_disponibles

<br>

###### URLs de retorno
https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/advanced-integration

<br>

###### Tarjetas de prueba
https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/test-integration


<!-- Links -->
[documentación]: https://www.mercadopago.com.ar/developers/es/guides/notifications/webhooks/
[script de seguridad]: https://www.mercadopago.cl/developers/es/guides/manage-account/account/payment-rejections/#bookmark_recomendaciones_para_mejorar_tu_aprobaci%C3%B3n