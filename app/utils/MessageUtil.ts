export class MessageUtil {
    static success(data: any) {
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    }

    static error(code: number, message: string) {
        return {
            statusCode: code,
            body: JSON.stringify({ message }),
        };
    }
}
