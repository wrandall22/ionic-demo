angular.module('demo.designation')
		.service('designations', function() {
			var DEFAULT_CAMPAIGN = '1-000';
			var designations = [
				{
					name: 'Bill Randall',
					designationNumber: '0123456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN,
					description: 'I have been working at Cru for over five years. During that time, I have worked primarily on give.cru.org and have also helped maintain some of our other web applications such as our internal staff application, our conference registration system, and our credit card processing system.',
					picture: '/img/0123456.JPG'
				},
				{
					name: 'Bill Palmer',
					designationNumber: '0223456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Weedo',
					designationNumber: '0323456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Balmer',
					designationNumber: '0423456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Plato',
					designationNumber: '0523456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Long',
					designationNumber: '0623456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Johns',
					designationNumber: '0723456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Tedd',
					designationNumber: '0823456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Yoke',
					designationNumber: '0923456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Adams',
					designationNumber: '0133456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Crommit',
					designationNumber: '0143456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Cummins',
					designationNumber: '0153456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Hammond',
					designationNumber: '0163456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Kronk',
					designationNumber: '0173456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Lats',
					designationNumber: '0183456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Lake',
					designationNumber: '0193456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Wane',
					designationNumber: '0124456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Yorgi',
					designationNumber: '0125456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Misko',
					designationNumber: '0126456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Rourke',
					designationNumber: '0127456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Happy',
					designationNumber: '0128456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Umm',
					designationNumber: '0129456',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Sanders',
					designationNumber: '0123556',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Borg',
					designationNumber: '0123656',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Bill Eams',
					designationNumber: '0123756',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN
				},
				{
					name: 'Adam Meyer',
					designationNumber: '1234567',
					type: 'Staff',
					campaignCode: DEFAULT_CAMPAIGN,
					description: 'I have been working at Cru for nearly two years now.  During that time I have worked on tools such as our event registration tool, WatchThinkChat, and MPDx.',
					picture: '/img/1234567.jpg'
				},
				{
					name: 'US Digital Strategies',
					designationNumber: '2345678',
					type: 'Ministry',
					campaignCode: DEFAULT_CAMPAIGN,
					description: 'We at US Digital Strategies are about equipping Christ-centered laborers with tools that will help them minister to the people in their lives.'
				},
				{
					name: 'Computers for Africa',
					designationNumber: '3456789',
					type: 'Fund Appeal',
					campaignCode: '1-123',
					description: 'There is a need for people in rural villages in Africa to have computers with which they can manage their local businesses and run hospitals. Please contact us if you want to give an actual computer to this cause, otherwise, continue to the giving page to donate towards one or more computers for those in need.'
				}
			];

			return {
				all: function() {
					return designations;
				}
			};
		});
