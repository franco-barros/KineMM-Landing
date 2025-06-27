import { Dumbbell, Activity, HeartPulse, HandHeart } from "lucide-react";
import { serviceDescriptions } from "./ServiceDescriptions";

export const servicesData = [
  {
    title: "Rehabilitación Traumatológica",
    subtitle: "Movilidad, fuerza y funcionalidad",
    description: serviceDescriptions.rehabilitacionTraumatologica,
    features: [
      "Evaluación personalizada de lesiones",
      "Ejercicio terapéutico específico",
      "Terapias manuales especializadas",
      "Aplicación de agentes físicos",
      "Mejora progresiva de movilidad y fuerza",
      "Tratamientos adaptados a cada etapa de recuperación",
    ],
    cta: "Solicitar turno",
    icon: Dumbbell,
  },
  {
    title: "Rehabilitación Deportiva",
    subtitle: "Prevención y recuperación de lesiones",
    description: serviceDescriptions.rehabilitacionDeportiva,
    features: [
      "Evaluación integral post-lesión",
      "Prevención de futuras lesiones",
      "Aumento de fuerza, movilidad y propiocepción",
      "Trabajo específico según deporte practicado",
      "Planificación de objetivos de retorno deportivo",
      "Seguimiento continuo de avances",
    ],
    cta: "Comenzar rehabilitación",
    icon: Activity,
  },
  {
    title: "Masoterapia",
    subtitle: "Relajación y alivio del dolor",
    description: serviceDescriptions.masoterapia,
    features: [
      "Manipulación de tejidos blandos",
      "Técnicas de amasamiento, fricción y presión",
      "Reducción de tensiones musculares",
      "Alivio del dolor localizado",
      "Mejora de la circulación",
      "Promoción de relajación física y mental",
    ],
    cta: "Reservar sesión",
    icon: HeartPulse,
  },
  {
    title: "Rehabilitación para Adultos Mayores",
    subtitle: "Autonomía e independencia funcional",
    description: serviceDescriptions.adultosMayores,
    features: [
      "Entrenamiento funcional adaptado",
      "Aumento de fuerza y movilidad general",
      "Prevención de caídas y pérdida de equilibrio",
      "Mejora en actividades de la vida diaria",
      "Enfoque sin necesidad de lesión previa",
      "Sesiones en consultorio o a domicilio",
    ],
    cta: "Pedir más información",
    icon: HandHeart,
  },
];
