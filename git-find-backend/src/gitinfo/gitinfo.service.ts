import { HttpException, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom, retry, timeout } from 'rxjs';

@Injectable()
export class GitinfoService {

    constructor(private readonly httpService: HttpService) { }

    async getuserinfo(username: string) {
        const github_user_info_endpoint = "https://api.github.com/users/" + username;
        try {
            const user_info = await firstValueFrom(this.httpService.get(github_user_info_endpoint));
            console.log(user_info)
            return user_info.data;
        } catch (error) {
            if (error.response.status == 404) {
                throw new HttpException("User not found", 404);
            } else {
                throw new HttpException("Unable to fetch user info, Please try again later", 500);
            }
        }

    }

    async getusergists(username: string) {
        const github_gist_info_endpoint = "https://api.github.com/users/" + username + "/gists";
        try {
            const gist_info = await firstValueFrom(this.httpService.get(github_gist_info_endpoint));
            console.log(gist_info)
            return gist_info.data;
        } catch (error) {
            if (error.response.status == 404) {
                throw new HttpException("Gists not found", 404);
            } else {
                throw new HttpException("Unable to fetch gists, Please try again later", 500);
            }
        }
    }

    async getuserorganizations(username: string) {
        const github_org_info_endpoint = "https://api.github.com/users/" + username + "/orgs";
        try {
            const org_info = await firstValueFrom(this.httpService.get(github_org_info_endpoint));
            console.log(org_info)
            return org_info.data;
        } catch (error) {
            if (error.response.status == 404) {
                throw new HttpException("Organizations not found", 404);
            } else {
                throw new HttpException("Unable to fetch organizations, Please try again later", 500);
            }
        }
    }


}