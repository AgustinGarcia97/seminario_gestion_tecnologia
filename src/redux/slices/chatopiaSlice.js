import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    security_info : {
        1: {
            question: "¿Qué es la infraestructura crítica?",
            answer: "La infraestructura crítica incluye todos aquellos sistemas y servicios esenciales para el funcionamiento y la seguridad de un país o región, como las redes eléctricas, el suministro de agua, los sistemas de comunicación, el transporte y los servicios de salud. Estas infraestructuras son especialmente vulnerables a los ciberataques, ya que una interrupción o manipulación en cualquiera de estos sistemas puede afectar gravemente tanto a las empresas como a la sociedad en general."
        },
        2: {
            question: "¿Qué son las contraseñas seguras?",
            answer: "Las contraseñas seguras son aquellas que son difíciles de adivinar o descifrar mediante ataques comunes, como los de fuerza bruta o de diccionario. Una contraseña segura debe ser: Larga (preferiblemente de 12 caracteres o más), Compleja (incluir letras mayúsculas, minúsculas, números y símbolos), Única (no repetir la misma contraseña en diferentes cuentas), Fácil de recordar para el usuario, pero difícil de adivinar para otros. Utilizar un administrador de contraseñas es una excelente práctica para crear y almacenar contraseñas seguras sin tener que memorizarlas."
        },
        3: {
            question: "Principales amenazas a la infraestructura crítica",
            answer: "Algunas de las amenazas más comunes para la infraestructura crítica incluyen: Malware: Software malicioso que puede infectar redes y sistemas, interrumpiendo o espiando las operaciones. Ataques de Ransomware: Bloquean el acceso a los sistemas o datos críticos hasta que se pague un rescate, paralizando las operaciones. Ataques DDoS (Denegación de Servicio Distribuida): Sobrecargan los sistemas con tráfico falso, provocando caídas del servicio. Phishing: Intentos de engañar a los empleados para que revelen información sensible o ejecuten software malicioso. Ataques de insiders (o internos): Amenazas provenientes de empleados o ex-empleados con acceso a información y sistemas confidenciales."
        },
        4: {
            question: "Buenas prácticas de seguridad",
            answer: "Para protegerse contra amenazas, las PYMEs pueden implementar las siguientes buenas prácticas: Capacitación constante de empleados sobre los riesgos de ciberseguridad y técnicas para identificar ataques. Mantenimiento y actualizaciones regulares de todos los sistemas y software. Uso de contraseñas seguras y doble autenticación para proteger el acceso a los sistemas. Respaldo regular de datos críticos para asegurar una recuperación rápida en caso de ataque. Monitoreo de actividad en la red para detectar y responder a actividades sospechosas en tiempo real."
        },
        5: {
            question: "Importancia de actualizar los sistemas",
            answer: "Las actualizaciones de software y sistemas operativos corrigen vulnerabilidades conocidas y mejoran la seguridad. Los ciberdelincuentes suelen aprovecharse de fallos en el software obsoleto para lanzar ataques. Mantener el software al día es una de las formas más efectivas y fáciles de evitar que los hackers exploten brechas de seguridad conocidas."
        },
        6: {
            question: "¿Qué es un firewall y cómo funciona?",
            answer: "Un firewall es un sistema de seguridad que actúa como una barrera entre una red interna y redes externas (como internet), filtrando el tráfico para bloquear amenazas y accesos no autorizados. Los firewalls pueden funcionar mediante: Filtros de paquetes: Analizan cada paquete de datos que entra o sale de la red para verificar que cumpla con las políticas de seguridad definidas. Firewalls de próxima generación: Ofrecen una protección más avanzada al analizar el contenido y comportamiento de las aplicaciones, en lugar de solo verificar la dirección y el puerto de origen. Implementar un firewall ayuda a las empresas a proteger su red de ataques y accesos no autorizados, aumentando la seguridad de sus datos y sistemas."
        }
    },
    selected_answer: {},
}

export const chatOPIASlice = createSlice({
    name:'chatOPIA',
    initialState,

    reducers:{
        processAnswer: (state, action) => {
            state.selected_answer =
                JSON.parse(
                    JSON.stringify(
                        state.security_info[action.payload]
                    )
                );
        }

    }
})

export const {
    processAnswer,
} = chatOPIASlice.actions;

