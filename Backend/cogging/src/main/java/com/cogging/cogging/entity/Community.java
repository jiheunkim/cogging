package com.cogging.cogging.entity;

import com.cogging.cogging.dto.CommunityDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Entity
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "community")
public class Community {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id")
    private Member member;

    private String title;

    private String content;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    private int comments;


    public CommunityDto toDto(){
        return CommunityDto.builder()
                .id(id)
                .title(title)
                .content(content)
                .createdAt(createdAt)
                .comments(comments)
                .author(member.toDto())
                .build();
    }

    public void update(String title, String content){
        this.title = title;
        this.content = content;
    }

}
