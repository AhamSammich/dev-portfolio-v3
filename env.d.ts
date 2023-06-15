interface Project {
	title: string;
	description: string;
	longDescription?: string[];
	link?: {
		url: string;
		qrCode?: string;
	};
	image?: {
		url: string;
	};
	tech?: string[];
	repo?: string;
}
