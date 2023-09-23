import {CommonService} from "@/common/core/CommonService";
import Vue from "vue";
import {Class} from "@/common/pojo/enum/Class";
import {LogUtil} from "@/common/util/LogUtil";
import {Log} from "@/common/pojo/dto/Log";
import {StreamFile} from "@/common/pojo/dto/StreamFile";
import autobind from "autobind-decorator";
import {WallpaperService} from "@/common/service/WallpaperService";

export class DemoTestService extends CommonService<DemoTestService> {

    private _key: number;
    private _url: string;
    private _show: boolean;
    private _pageSize: number;
    private _userName: string;
    private _password: string;
    private _validCode: string;
    private _musicFlag: boolean;
    private _pageNumber: number;
    private _totalRecord: number;
    private _files: Array<StreamFile>;
    private _audios: Array<Record<string, any>>;

    public constructor(vue: Vue) {
        super(vue);
        this._key = 1;
        this._url = "";
        this._show = false;
        this._userName = "";
        this._password = "";
        this._pageSize = 10;
        this._pageNumber = 1;
        this._validCode = "";
        this._musicFlag = true;
        this._totalRecord = 30;
        this._files = new Array<StreamFile>();
        this._audios = Array.of({
            lrc: "",
            artist: "本兮",
            name: "让寂寞别走",
            cover: "https://m.yongkj.cn/audio_default.png",
            url: "https://file.yongkj.cn/fileSystem/admin/Music/%E6%9C%AC%E5%85%AE%20-%20%E8%AE%A9%E5%AF%82%E5%AF%9E%E5%88%AB%E8%B5%B0%20%20mqms2%20.mp3",
        }, {
            lrc: "",
            artist: "本兮&单小源",
            name: "你在看孤独的风景",
            cover: "https://m.yongkj.cn/audio_default.png",
            url: "https://file.yongkj.cn/fileSystem/admin/Music/%E6%9C%AC%E5%85%AE%26%E5%8D%95%E5%B0%8F%E6%BA%90%20-%20%E4%BD%A0%E5%9C%A8%E7%9C%8B%E5%AD%A4%E7%8B%AC%E7%9A%84%E9%A3%8E%E6%99%AF%20%20mqms2%20.mp3",
        });
    }

    public initData(): void {
        this.wallpaperService.on("test", msg => {
            this.info(msg);
            LogUtil.loggerLine(Log.of("DemoTestService", "testEvent", "msg", msg));
        });
        LogUtil.loggerLine(Log.of("DemoTestService", "initData", "message", this.vue.$message));
        LogUtil.loggerLine(Log.of("DemoTestService", "initData", "vue", this.vue));
        LogUtil.loggerLine(Log.of("DemoTestService", "initData", "WallpaperService", this.wallpaperService));
    }

    public judgeCode(): void {
        let validCode = this._validCode.trim();
        if (validCode.length === 0) {
            this.warning("请输入验证码！");
            return;
        }

        let oldValidCode = this.validCodeService.validCode;
        LogUtil.loggerLine(Log.of("DemoTestService", "judgeCode", "oldValidCode", oldValidCode));

        if (validCode.toLowerCase() !== oldValidCode.toLowerCase()) {
            this.error("验证码输入错误！");
            return;
        }

        this.success("验证码输入正确！");
    }

    public changeFiles(file: StreamFile, fileList: Array<StreamFile>): void {
        DemoTestService.readExcel(file.raw).then();
        LogUtil.loggerLine(Log.of("JanusStreamTestService", "changeFiles", "file", file));
        LogUtil.loggerLine(Log.of("JanusStreamTestService", "changeFiles", "fileList", fileList));
    }

    private static async readExcel(file: File): Promise<void> {
        LogUtil.loggerLine(Log.of("JanusStreamTestService", "changeFiles", "lstData", file));
    }

    public uploadFiles(): void {

    }

    public reset(): void {

    }

    public register(): void {

    }

    public login(): void {

    }

    public connect(): void {

    }

    public disconnect(): void {

    }

    public handleButtonClick(): void {
        this._show = true;
        this._userName = "Hello world!";
        this._password = "Hello world!";
        // this.service.userName = "Hello world!";
        // this.service.password = "Hello world!";
        this.wallpaperService.emit("test", "Hello world！");
    }

    @autobind
    public pageNumberChange(pageNumber: number): void {
        LogUtil.loggerLine(Log.of("DemoTestService", "pageNumberChange", "pageNumber", pageNumber));
    }

    public pageSizeChange(pageSize: number): void {
        LogUtil.loggerLine(Log.of("DemoTestService", "pageSizeChange", "pageSize", pageSize));
    }

    get validCode(): string {
        return this._validCode;
    }

    set validCode(value: string) {
        this._validCode = value;
    }

    get pageSize(): number {
        return this._pageSize;
    }

    get totalRecord(): number {
        return this._totalRecord;
    }

    get show(): boolean {
        return this._show;
    }

    get key(): number {
        return this._key;
    }

    get pageNumber(): number {
        return this._pageNumber;
    }

    set pageNumber(value: number) {
        this._pageNumber = value;
    }

    get audios(): Array<Record<string, any>> {
        return this._audios;
    }

    get musicFlag(): boolean {
        return this._musicFlag;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get files(): Array<StreamFile> {
        return this._files;
    }

    set files(value: Array<StreamFile>) {
        this._files = value;
    }

    get url(): string {
        return this._url;
    }

    protected getClassName(): string {
        return Class.DemoTestService;
    }

    static get class(): string {
        return Class.DemoTestService;
    }

}