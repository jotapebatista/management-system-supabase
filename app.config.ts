export default defineAppConfig({
	nuxtIcon: {},
	tairo: {
		title: "Tairo",

		collapse: {
			toolbar: {
				enabled: true,
				showTitle: true,
				showNavBurger: true,
			},
			// circularMenu: {
			// 	enabled: false,
			// 	tools: [
			// 		{
			// 			component: "DemoThemeToggle",
			// 			props: {
			// 				class: "ms-auto",
			// 				disableTransitions: true,
			// 				inverted: true,
			// 			},
			// 		},
			// 		{
			// 			component: "DemoCircularMenuLanguage",
			// 		},
			// 		{
			// 			component: "DemoCircularMenuNotifications",
			// 		},
			// 		{
			// 			component: "DemoCircularMenuActivity",
			// 		},
			// 	],
			// },
			navigation: {
				enabled: true,
				items: [
					{
						name: "Dashboards",
						icon: { name: "ph:sidebar-duotone", class: "w-5 h-5" },
						activePath: "/dashboards",
						children: [
							{
								name: "Personal v1",
								to: "/dashboards",
								icon: {
									name: "ph:coffee-duotone",
									class: "w-4 h-4",
								},
							},
							{
								name: "Personal v2",
								to: "/dashboards/personal-2",
								icon: {
									name: "ph:chart-pie-slice-duotone",
									class: "w-4 h-4",
								},
							},
							{
								name: "Personal v3",
								to: "/dashboards/personal-3",
								icon: {
									name: "ph:cactus-duotone",
									class: "w-4 h-4",
								},
							},
							{
								name: "Analytics",
								to: "/dashboards/analytics",
								icon: {
									name: "ph:gauge-duotone",
									class: "w-4 h-4",
								},
							},
							{
								name: "Stocks",
								to: "/dashboards/stocks",
								icon: {
									name: "ph:coin-duotone",
									class: "w-4 h-4",
								},
							},
							{
								name: "Sales",
								to: "/dashboards/sales",
								icon: {
									name: "ph:shopping-cart-duotone",
									class: "w-4 h-4",
								},
							},
						],
					},
					{
						name: "Clients",
						icon: {
							name: "ph:app-window-duotone",
							class: "w-5 h-5",
						},
						activePath: "/clients",
						children: [
							{
								name: "Clientes",
								to: "/clients",
								icon: {
									name: "ph:list-bullets-duotone",
									class: "w-4 h-4",
								},
							},
						],
					},
					{
						name: "Divider",
						divider: true,
					},
					// {
					//   name: 'Customize',
					//   icon: { name: 'ph:drop-half-bottom-duotone', class: 'w-5 h-5' },
					//   click: () => {
					// 	const isSwitcherOpen = useState('switcher-open', () => false)
					// 	isSwitcherOpen.value = true
					//   },
					//   position: 'end',
					// },
				],
			},
		},
	},
});
