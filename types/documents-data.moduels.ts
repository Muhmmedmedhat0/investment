
 export interface Reports {
	ReportTab: ReportTab[];
	id:        number;
 }
 
 export interface ReportTab {
	ReportFile: ReportFile[];
	TabTitle:   string;
	id:         number;
 }
 
 export interface ReportFile {
	FileName: string;
	asset:    MetaImage;
	id:       number;
 }
 
 export interface MetaImage {
	data: Data | null;
 }
 
 export interface Data {
	attributes: DataAttributes;
	id:         number;
 }
 
 export interface DataAttributes {
	url:               string;
 }
 
 export enum EXT {
	PDF = ".pdf",
 }
 
 export enum Hash {
	MuhmmedMedhat11_6_2023_3_7548Ae48Ef = "Muhmmed_Medhat_11_6_2023_3_7548ae48ef",
 }
 
 export enum MIME {
	ApplicationPDF = "application/pdf",
 }
 
 export enum Name {
	MuhmmedMedhat11620233PDF = "Muhmmed_Medhat_11-6-2023-3.pdf",
 }
 
 export enum Provider {
	StrapiProviderUploadStrapiCloud = "strapi-provider-upload-strapi-cloud",
 }
 
 export interface Localizations {
	data: LocalizationsDatum[];
 }
 
 export interface LocalizationsDatum {
	attributes: FluffyAttributes;
	id:         number;
 }
 
 export interface FluffyAttributes {
	PageName:    string;
	createdAt:   Date;
	locale:      string;
	publishedAt: Date;
	updatedAt:   Date;
 }
 