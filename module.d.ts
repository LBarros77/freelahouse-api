declare namespace NodeJS {
	export interface ProcessEnv {
		PORT: number;
		HOST_DB: string;
		PORT_DB: number;
		USERNAME_DB: string;
		PASSWORD_DB: string;
		DATABASE: string;
	}
}