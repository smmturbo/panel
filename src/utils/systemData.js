const orderStatuses = {
  pending: 'pending',
  processing: "processing",
  completed: "completed",
  cancelled: "cancelled",
  active: "active",
  paused: "paused"
}

const systemData = { orderStatuses }

export default systemData




// const catalog = {
//   products: {
//     1: {
//       id: 1,
//       label: "Seguidores Brasileiros Instagram",
//       serviceId: 100 ,
//       type: "order",
//       category: "instagram",
//       price: 29.90,
//       fields: [
//         {
//           id: "profile_link",
//           name: "link",
//           label: "Link do perfil",
//           placeholder: "https://instagram.com/perfil",
//           description: "Link completo"
//         },
//         {
//           id: "quantity",
//           name: "quantity",
//           label: "Quantidade de Seguidores",
//           placeholder: "Ex.: 100",
//           description: "Apenas o número"
//         }
//       ]
//     },
//
//     2: {
//       id: 2,
//       label: "Curtidas Brasileiras Instagram",
//       serviceId: 200,
//       type: "order",
//       category: "instagram",
//       price: 24.90 ,
//       fields: [
//         {
//           id: "post_link",
//           name: "link",
//           label: "Link da foto",
//           placeholder: "https://instagram.com/p/iddopost",
//           description: "Link completo do post - Somente fotos"
//         },
//
//         {
//           id: "quantity",
//           name: "quantity",
//           label: "Quantidade de curtidas",
//           placeholder: "Ex.: 250",
//           description: "Apenas o número"
//         }
//       ]
//     },
//
//     3: {
//       id: 3,
//       label: "Curtidas Automáticas Instagram",
//       serviceId: 300,
//       type: "subscription",
//       quantityModifier: "min_max_posts",
//       category: "instagram",
//       price: 24.90 ,
//       fields: [
//         {
//           id: "profile_name",
//           name: "profile",
//           label: "Perfil",
//           placeholder: "@perfil",
//           description: "Somente o nome do perfil"
//         },
//         {
//           id: "number_of_posts",
//           name: "posts",
//           label: "Número de posts",
//           placeholder: "Ex.: 10",
//           description: "O número de postagens que receberão as curtidas"
//         },
//         {
//           id: "quantity",
//           name: "quantity",
//           label: "Número de curtidas",
//           placeholder: "Ex.: 45",
//           description: "Os pedidos irão variar entre -5% e +5% desta quantidade para ficar mais natural"
//         }
//       ]
//     },
//
//     5: {
//       id: 5,
//       label: "Seguidores Twitter",
//       serviceId: 600,
//       type: "order",
//       category: "twitter",
//       price: 24.90 ,
//       fields: [
//         {
//           id: "profile",
//           name: "profile",
//           label: "Perfil no Twitter",
//           placeholder: "@perfil",
//           description: "Apenas o nome do perfil"
//         },
//
//         {
//           id: "quantity",
//           name: "quantity",
//           label: "Quantidade de seguidores",
//           placeholder: "Ex.: 250",
//           description: "Apenas o número"
//         }
//       ]
//     }
//   },
//
//   categories : {
//     instagram: {
//       id: "instagram",
//       label: "Instagram"
//     },
//     youtube: {
//       id: "youtube",
//       label: "YouTube"
//     },
//     twitter: {
//       id: "twitter",
//       label: "Twitter"
//     }
//   }
// }
