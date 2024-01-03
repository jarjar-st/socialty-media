import Link from 'next/link';

const PrivacyPolicy = () => {
    return (
        <div className=' bg-slate-500 h-auto w-full pt-[15%] justify-center text-start items-center px-[5%] pb-[5%]'>
            <h1 className=' font-bold text-[26px] '>PRIVACY POLICY</h1>
            <p className=' pb-6'>This Privacy Policy establishes the terms in which Socialty Media uses and protects the information that is provided by its users when using its website and/or advertising or publications on Facebook. Socialty Media is committed to the security of the data of its users or followers. When we ask you to fill out personal information fields with which you can be identified, we do so ensuring that it will only be used in accordance with the terms of this document. However, this Privacy Policy may change over time or be updated, so we recommend and emphasize that you continually review this page to ensure that you agree with such changes.</p>
            <h2 className=' font-bold text-[26px] '>Information we collect</h2>
            <p className=' pb-6'>Our website may collect personal information, for example: Name, contact information such as your email address, demographic information, services of interest to you and for which you require more information or a quote.</p>
            <h2 className=' font-bold text-[26px] '>How we use your information</h2>
            <p className=' pb-6'>
                Our website uses the information in order to provide the best possible service, particularly to maintain a record of users, orders if applicable, and improve our products and services. Periodic emails may be sent through our site with special offers, new products and other advertising information that we consider relevant to you or that may provide you with some benefit, these emails will be sent to the address you provide and may be canceled. whenever.
                Socialty Media is highly committed to fulfilling the commitment to keep your information secure. We use the most advanced systems and constantly update them to ensure that there is no unauthorized access.</p>
            <h2 className=' font-bold text-[26px] '>Cookies</h2>
            <p className=' pb-6'>Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su computador. Al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.
                Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su computador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su computador ni de usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio de navegación web. También usted puede cambiar la configuración de su computador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.</p>
            <h2 className=' font-bold text-[26px] '>Links to Third Parties</h2>
            <p className=' pb-6'>This website may contain links to other sites that may be of interest to you. Once you click on these links and leave our page, we no longer have control over the site to which you are redirected and therefore we are not responsible for the terms or privacy or the protection of your data on those other third party sites. . These sites are subject to their own privacy policies, so it is recommended that you consult them to confirm that you agree with them.</p>
            <h2 className=' font-bold text-[26px] '>Control of your personal information</h2>
            <p className=' pb-6'>At any time you can restrict the collection or use of personal information that is provided to our website, through advertising and/or social media pages. Each time you are asked to fill out a form, such as the user registration form, you can check or uncheck the option to receive information by email. If you have selected the option to receive our newsletter or advertising, you can cancel it at any time.
                Socialty Media will not sell, assign or distribute personal information that is collected without your consent, unless required by a judge with a court order.
                Socialty Media reserves the right to change the terms of this Privacy Policy at any time.</p>
            <h2 className=' font-bold text-[26px] '>Contact us</h2>
            <p>If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
            <Link aria-label='Contact Us' href="/contact">Contact</Link>
        </div>
    );
};

export default PrivacyPolicy;