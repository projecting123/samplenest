import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from "./user.schema";

@Injectable()
export class UserDBService {
    constructor(@InjectModel('User') userModel: Model<UserDocument>) {}
}