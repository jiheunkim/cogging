package com.cogging.cogging.dto;

import com.cogging.cogging.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberSingUpDto {
    private String email;

    private String password;

    private String nickname;

    private int profileImage;

    public Member toEntity(){
        return Member.builder()
                .email(email)
                .password(password)
                .nickname(nickname)
                .profileImage(profileImage)
                .participation(0)
                .build();
    }
}
