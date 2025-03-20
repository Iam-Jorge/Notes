# Certificados Digitales

<div style="display: flex; align-items: center;">
    <div style="flex: 1;">
        <img src="/assets/images/CCN-CERT/CCN-CERT.png" alt="Logo CCN-CERT" width="200">
    </div>
    <div style="flex: 2; padding-left: 20px; border-left: 3px solid #989898; padding-left: 20px;">
        <p><strong>Curso:</strong> Certificados Digitales<br>
        <strong>Plataforma:</strong> Ángeles - (CCN-CERT)<br>
        <strong>Fecha:</strong> 02 Mar 2025 - 04 Mar 2025<br>
        <strong>Tiempo:</strong> 15 horas.</p>
    </div>
</div>

> Este documento recoge mis notas del curso "Certificados Digitales" realizado en la plataforma Ángeles del Centro Criptológico Nacional (CCN-CERT). Este curso forma parte del programa de formación en ciberseguridad ofrecido por el CCN para profesionales del sector público y privado.

### 1. Paradigmas de la seguridad

**Seguridad de la Información**: Medidas y controles que garantizan la confidencialidad, la integridad y la disponibilidad de los sistemas de información incluyendo hardware, software, firmware e información que es procesada, guardada y comunicada.

Principales pilares de la seguridad (Tríada CIA):
- **Confidencialidad:** ¿Quién tiene acceso a los datos?
- **Integridad:** ¿Se han modificado los datos o sistema?
- **Disponibilidad:** ¿Los datos están accesibles?

Otros principios relacionados con la seguridad:
- **Autenticidad:** ¿Es quién dice ser?
- **Responsabilidad (Accountability):** ¿Quién realizó la acción?
- **No repudio:** Garantiza que una parte no pueda negar su participación o su autenticidad.

### 1.1. Algunos conceptos

**Autenticación:** Procedimiento de verificación de la identidad digital de un sujeto en sus interacciones en el ámbito digital.

Se clasifica en los sigueintes factores:
- Conocimiento: Coloquialmente «algo que se sabe» (contraseñas o claves).
- Posesión: Coloquialmente «algo que se tiene» componentes lógicos (certificados) o dispositivos físicos (tokens).
- Cualidades inherentes: Coloquialmente «algo que se es» (la voz o rasgos faciales).


**DPC (Declaración de prácticas de certificación):** Establece la información específica que aplica a la expedición de cada certificado y cada uno de sus atributos.

**CA (Autoridad de Certificación):** Es una entidad tercera de confianza del emisor y del receptor del mensaje.

**PSC (prestador de servicios de confianza):** Es una persona física o jurídica que presta uno o más servicios electrónicos de confianza, bien como prestador cualificado o como prestador no cualificado de servicios electrónicos de confianza.

### 1.2. Criptografía

**Criptografía:** Disciplina que busca asegurar la comunicación y proteger la información.

- **Criptografía:** Desarrolla técnicas para cifrar información, asegurando triada.
- **Criptoanálisis:** Busca vulnerabilidades en los sistemas de cifrado.

La criptografía se clasifica en función de tres dimensiones:

1. Tipo de operaciones:
   - Sustitución: Asigna cada elemento del texto sin formato a otro elemento.
   - Transposición: Reorganiza los elementos del texto plano.

2. Número de claves:
   - Simétrica: Remitente y receptor usan la misma clave.
   - Asimétrica: Cada uno utiliza una clave diferente.

3. Forma de procesamiento del texto plano:
   - Cifrado de bloques: Troceando el archivo origen y lo procesa por bloques.
   - Cifrado de flujo: Procesa elementos de entrada de manera continua.

**Hash:** Es un función con las siguientes propiedades:

- **Tamaño de Entrada:** Puede aplicarse a bloques de datos de cualquier tamaño.
- **Salida Fija:** Genera una salida de longitud constante.
- **Facilidad de Cálculo:** Calcular H(x) es relativamente sencillo para cualquier x.
- **Unidireccionalidad:** Es difícil encontrar una entrada x dada su salida h.
- **Resistencia a Colisiones:** Es computacionalmente inviable produzca la misma salida.




## 2. ¿En qué legislación nos basamos en España?

### 2.1. Ley 6/2020

La aplicación de esta ley regula la firma electrónica en nuestro ordenamiento jurídico.

### 2.2. Reglamento (UE) nº 910/2014: eIDAS

Reglamento relativo a la identificación electrónica y los servicios de confianza para las transacciones electrónicas en el mercado, establece el marco jurídico para la identificación electrónica y servicios de confianza en la UE.

### 2.3. Ley 39/2015 (LPACAP)

Incorpora la regulación eIDAS al marco legal español. Establece el uso obligatorio de medios electrónicos en los procedimientos administrativos y la identificación electrónica en las relaciones entre ciudadanos y la Administración.

### 2.4. Ley 40/2015 (LRJSP)

Refuerza la digitalización de la Administración Pública. Regula el uso de la identificación y firma electrónica en el ámbito público, asegurando su validez jurídica.

### 2.5. Real Decreto 1553/2005

Regula la expedición del DNI electrónico y sus certificados de firma digital. Permite a los ciudadanos identificarse y firmar digitalmente documentos con la misma validez que una firma manuscrita.

### 2.6. Ley 34/2002 (LSSI-CE)

Regula la prestación de servicios electrónicos en España.

### 2.7. Real Decreto-Ley 19/2018

Refuerza la seguridad en pagos electrónicos, exige autenticación reforzada del cliente y protege contra fraudes.

### 2.8. Ley Orgánica 3/2018 (LOPDGDD)

Establece normas sobre el tratamiento de datos personales, consentimiento informado y derechos de los usuarios.

### 2.9. Real Decreto Legislativo 1/2007, de Defensa de los Consumidores y Usuarios

Protege a los consumidores en transacciones electrónicas. Regula devoluciones, garantías y prohíbe cláusulas abusivas en contratos online.

## 3. El certificado digital

### 3.1. ¿Qué es un certificado digital?

Es un documento electrónico que contiene datos identificativos y es expedido por prestadores de confianza acreditados que vinculan a una persona física con sus datos de verificación de firma y confirma su identidad.

### 3.2. ¿Qué información contiene un certificado?

- La identidad del titular. Datos de filiación del titular (empresa, colegio profesional…etc).
- La clave pública del titular.
- Datos propios del certificado: número de serie, fecha de caducidad…
- La identidad de la autoridad de certificación que lo ha emitido.
- La firma de la autoridad de certificación…

### 3.3. Tipos de certificados

- Tipos de certificado según su soportes
  - Certificado en software o distribuido: Certificado que se emite en formato de archivo descargable cuyo soporte es el propio equipo físico.
  - Certificado centralizado: Este certificado no se aloja en equipos informáticos individuales sino en la nube.

- Tipos de certificado según su emisión
  - Certificados cualificados: Emitidos por un Prestados de Servicios de Confianza Cualificados, bajo las condiciones de eIDAS.
  - Certificados no cualificados: Emitidos por un Prestador de Servicios de Confianza, pero sin el amparo de la cualificación y sin el respaldo jurídico.

- Tipos de certificado según su titularidad
  - Certificados de persona física: Vincula a su titular con unos datos de verificación de firma que confirman su identidad.
  - Certificados de representación: Vincula a un titular con unos datos de verificación actuando en representación de una entidad.
  - Certificados de componente: Se trata de certificados que autentican la identidad de un servidor y la firma de un código.

- Tipos de certificado según eIDAS
  - Certificado de firma: Orientado a la firma de personas físicas.
  - Certificado de sello: Orientado al sello de personas jurídicas.
  - Certificado de autenticación web: Orientado a vincular el sitio web con la persona física o jurídica titular del certificado.
  - Certificado no cualificado: Puede estar orientado tanto a personas físicas, como jurídicas, componentes, SSL.

### 3.4. Un servicio específico: el TimeStamps

El sellado de tiempo es un mecanismo on-line que permite demostrar que una serie de datos han existido y no han sido alterados desde un instante específico en el tiempo.

## 4. Validación de certificados y autenticación

### 4.1. El sistema Cl@ve

El Sistema Cl@ve es una plataforma del Gobierno español de verificación de identidades electrónicas para la identificación y autenticación de los ciudadanos en España.

### 4.2. Firma electrónica

Firma electrónica que se realiza mediante par de claves (privada/pública) consiguiendo mayores garantías y permitiendo garantizar la integridad y, asociando ambas claves a un certificado digital, que mediante la verificación previa de la identidad del firmante antes de emitirlo, permite también garantizar el no repudio.

### 4.3. Código de un solo uso (OTP por SMS)

Firma asociada al envío de un código OTP (One Time Password).

### 4.4. Cómo confirmar la validez un certificado

A nivel técnico, existen dos medios principales para validar un certificado las CRLs y el OCSP.

- CRL (Certificate Revocation List)
  - La CA debe ser capaz de publicar de forma segura información acerca del estado, chequeado su estado antes de ser usado.
  - Para ello la CA creará CRL y publique estas CRL a un sistema de directorio.

- Protocolo de verificación online del estado de revocación de los certificados (OCSP)
  - Al mismo tiempo, el OCSP es un protocolo de verificación online del estado de revocación de los certificados.
  - Solicitudes firmasdas y más eficiente que las descargas CRL y ofreciendo como respuesta de: "bueno" (good), "revocado" (revoked) o "desconocido" (unknowno).

## 5. Otros usos de certificados

### 5.1. Autenticación WEB

En la autenticación web, permiten verificar la seguridad de los sitios mediante certificados cualificados.

### 5.2 VPN y certificados de cliente

En las VPNs, cada cliente necesita un certificado de cliente generado desde un certificado raíz para conectarse de forma segura, evitando errores de autenticación.
