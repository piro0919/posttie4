"use client";
import { Box, Button, HStack, Link as KumaUiLink, Text } from "@kuma-ui/core";
import Image from "next/image";
import Link from "next/link";
import { FaReply, FaStar } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./style.module.scss";

export default function Auth(): JSX.Element {
  return (
    <>
      <Box
        borderColor="#dcddde"
        borderStyle="solid"
        borderWidth="0 0 1px"
        pb="12px"
        pt="24px"
        px="16px"
      >
        <form>
          <Box pb="12px">
            <TextareaAutosize
              autoFocus={true}
              className={styles.textareaAutosize}
              minRows={2}
              placeholder="いまなにしてる？"
            />
          </Box>
          <HStack
            alignItems="center"
            borderColor="#dcddde"
            borderStyle="solid"
            borderWidth="1px 0 0"
            justify="space-between"
            pt="12px"
          >
            <Link href="/hoge" legacyBehavior={true} passHref={true}>
              <KumaUiLink>
                <Box borderRadius="100vmax" overflow="hidden">
                  <Image
                    alt="hoge"
                    height={42}
                    src="https://pbs.twimg.com/profile_images/1363718805927514115/dZBaO7tr_400x400.jpg"
                    width={42}
                  />
                </Box>
              </KumaUiLink>
            </Link>
            <Button
              bg="#238f76"
              borderRadius="100vmax"
              color="#fff"
              fontSize="1.6rem"
              fontWeight="bold"
              height="42px"
              type="submit"
              width="120px"
            >
              ポストする
            </Button>
          </HStack>
        </form>
      </Box>
      {Array(2)
        .fill(undefined)
        .map((_, index) => (
          <Box
            borderColor="#dcddde"
            borderStyle="solid"
            borderWidth="0 0 1px"
            key={index}
            pb="12px"
            pt="16px"
            px="16px"
          >
            <Box pb="16px">
              <Text fontSize="1.6rem">Posttie 開発中…</Text>
            </Box>
            <HStack alignItems="center" justify="space-between">
              <HStack alignItems="center" gap="12px">
                <Link href="/hoge" legacyBehavior={true} passHref={true}>
                  <KumaUiLink>
                    <HStack alignItems="center" gap="12px">
                      <Box borderRadius="100vmax" overflow="hidden">
                        <Image
                          alt="hoge"
                          height={28}
                          src="https://pbs.twimg.com/profile_images/1363718805927514115/dZBaO7tr_400x400.jpg"
                          width={28}
                        />
                      </Box>
                    </HStack>
                  </KumaUiLink>
                </Link>
                <Link href="/hoge" legacyBehavior={true} passHref={true}>
                  <KumaUiLink fontWeight="bold">
                    Brandon K. Hill | CEO of btrax
                  </KumaUiLink>
                </Link>
              </HStack>
              <HStack gap="24px" pr="12px">
                <Button>
                  <FaStar color="#238f76" size={20} />
                </Button>
                <Button>
                  <FaReply color="#238f76" size={20} />
                </Button>
              </HStack>
            </HStack>
          </Box>
        ))}
    </>
  );
}
