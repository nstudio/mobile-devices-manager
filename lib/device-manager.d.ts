import { IUnitOfWork } from "../db/interfaces/unit-of-work";
import { IDevice } from "mobile-devices-controller";
export declare class DeviceManager {
    private _unitOfWork;
    private _useLocalRepository;
    private readonly maxDeviceUsage;
    private readonly maxDeviceRebootCycles;
    private _usedDevices;
    constructor(_unitOfWork: IUnitOfWork, _useLocalRepository?: boolean);
    boot(query: any, count: any, shouldUpdate?: boolean): Promise<any[]>;
    private checkBusyDevicesStatus;
    subscribeForDevice(query: any): Promise<IDevice>;
    unsubscribeFromDevice(query: any, maxDeviceUsage: any): Promise<IDevice>;
    private refreshDeviceStatus;
    private unmark;
    private killDevicesOverLimit;
    killDevices(query?: any): Promise<{}>;
    refreshData(query: any, updateQuery: any): Promise<{}>;
    dropdb(): Promise<{}>;
    update(token: any, udpateQuery: any): Promise<any>;
    private killDevice;
    private mark;
    private createModel;
    private static deviceToJSON;
    private static convertIDeviceToQuery;
    private increaseDevicesUsage;
    private resetUsage;
    private checkDeviceUsageHasReachedLimit;
    private isAndroid;
    private isIOS;
}
